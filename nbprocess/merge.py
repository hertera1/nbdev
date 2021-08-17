# AUTOGENERATED! DO NOT EDIT! File to edit: ../nbs/05_merge.ipynb.

# %% auto 0
__all__ = ['conf_re', 'unpatch', 'merge_conflicts']

# %% ../nbs/05_merge.ipynb 2
from .imports import *
from .read import *
from .export import *
from .sync import *
from fastcore.script import *

from difflib import SequenceMatcher

# %% ../nbs/05_merge.ipynb 17
_BEG,_MID,_END = '<'*7,'='*7,'>'*7
conf_re = re.compile(rf'^{_BEG}\s+(\S+)\n(.*?)\n{_MID}\n(.*?)^{_END}\s+(\S+)\n', re.MULTILINE|re.DOTALL)

def _unpatch_f(before, cb1, cb2, c, r):
    if cb1 is not None and cb1 != cb2: raise Exception(f'Branch mismatch: {cb1}/{cb2}')
    r.append(before)
    r.append(c)
    return cb2

# %% ../nbs/05_merge.ipynb 18
def unpatch(s:str):
    "Takes a string with conflict markers and returns the two original files, and their branch names"
    *main,last = conf_re.split(s)
    r1,r2,c1b,c2b = [],[],None,None
    for before,c1_branch,c1,c2,c2_branch in chunked(main, 5):
        c1b = _unpatch_f(before, c1b, c1_branch, c1, r1)
        c2b = _unpatch_f(before, c2b, c2_branch, c2, r2)
    return ''.join(r1+[last]), ''.join(r2+[last]), c1b, c2b

# %% ../nbs/05_merge.ipynb 22
def _make_md(code): return dict(source=f'`{code}`', cell_type="markdown", metadata={})
def _make_conflict(a,b, branch1, branch2):
    return [_make_md(f'{_BEG} {branch1}')] + a + \
            [_make_md(_MID)] + b + [_make_md(f'{_END} {branch2}')]

def _get_matches(a,b): return SequenceMatcher(None, a, b).get_matching_blocks()

def _merge_cells(a,b,brancha,branchb, prefer_us):
    matches = _get_matches(a,b)
    res,prev_sa,prev_sb = [],0,0
    for sa,sb,sz in matches:
        ca,cb = a[prev_sa:sa],b[prev_sb:sb]
        if ca or cb: res += _make_conflict(ca, cb, brancha, branchb)
        if sz: res += a[sa:sa+sz] if prefer_us else b[sb:sb+sz]
        prev_sa,prev_sb = sa+sz,sb+sz
    return res

# %% ../nbs/05_merge.ipynb 23
def merge_conflicts(nbname, out_fname=None, prefer_us=True):
    "Create working notebook from conflicted notebook `nbname`"
    nbname = Path(nbname)
    nbtxt = nbname.read_text()
    a,b,branch1,branch2 = unpatch(nbtxt)
    ac,bc = dict2nb(json.loads(a)),dict2nb(json.loads(b))
    dest = ac if prefer_us else bc
    dest.cells = _merge_cells(ac.cells, bc.cells, branch1, branch2, prefer_us=prefer_us)
    write_nb(dest, ifnone(out_fname, nbname))

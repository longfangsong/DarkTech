import hug
import sympy as sp


def fixed_simplify(formula: hug.types.text):
    return sp.simplify(formula.replace(' ', '+'))


@hug.get(examples='formula=2*x')
async def simplify(formula: hug.types.text):
    sp.latex(fixed_simplify(formula))
    try:
        return {'result': sp.latex(fixed_simplify(formula))}
    except sp.SympifyError:
        return {}


@hug.get(examples='formula=sin(x)')
async def integrate(formula: hug.types.text):
    return {'result': sp.latex(sp.simplify(sp.integrate(fixed_simplify(formula))))}


@hug.get(examples='formula=2*log(x*y)')
async def free_symbols(formula: hug.types.text):
    return {'result': sorted([sp.latex(x) for x in fixed_simplify(formula).free_symbols])}


@hug.get(examples='formula=sin(x)')
async def diff(formula: hug.types.text):
    return {'result': sp.latex(sp.simplify(sp.diff(fixed_simplify(formula))))}

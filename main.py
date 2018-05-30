import hug
from hug.middleware import CORSMiddleware

import basic_math

api = hug.API(__name__)
api.extend(basic_math, '/basic_math')
api.http.add_middleware(CORSMiddleware(api))

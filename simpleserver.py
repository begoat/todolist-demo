from sanic import Sanic
from sanic.response import json
import asyncio

app = Sanic()

CORS_HOST = 'http://0.0.0.0:3000'

@app.route('/', methods=['POST'])
async def test(request):
    await asyncio.sleep(3)
    response = json({'hello': 'world'})
    response.headers['Access-Control-Allow-Origin'] = CORS_HOST
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
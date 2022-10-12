exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Soxoy',
      age: 88,
      email: 'soxoy@gmail.com'
    })
  }
}
const {
  addNodeHandler,
  getAllNotesHandler,
  getNotesById,
  editNoteByIdHandler,
  deleteNoteById
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNodeHandler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesById
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteById
  }
]

module.exports = routes

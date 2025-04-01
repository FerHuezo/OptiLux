const requestMessages = {
    SUCCESS: { code: 200, message: 'Solicitud procesada con éxito.' },
    ERROR: { code: 500, message: 'Ocurrió un error al procesar la solicitud.' },
    NOT_FOUND: { code: 404, message: 'Recurso no encontrado.' },
    UNAUTHORIZED: { code: 401, message: 'No autorizado para realizar esta acción.' },
    FORBIDDEN: { code: 403, message: 'Acceso denegado.' },
    BAD_REQUEST: { code: 400, message: 'Solicitud incorrecta.' },
    SERVER_ERROR: { code: 500, message: 'Error interno del servidor.' },
    CREATED: { code: 201, message: 'Recurso creado exitosamente.' },
    UPDATED: { code: 200, message: 'Recurso actualizado exitosamente.' },
    DELETED: { code: 200, message: 'Recurso eliminado exitosamente.' },
    VALIDATION_ERROR: { code: 422, message: 'Error de validación en los datos proporcionados.' },
  };
  
  export default requestMessages;
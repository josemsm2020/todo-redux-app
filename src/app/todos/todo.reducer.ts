import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarTodos } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del capitán América'),
];


//En el video el ejemplo de la versión de NGRX muestra la constante y la function por separado
//pero en la ayuda actual no se pone la function porque esta se asigna a la constante y se exporta 
//a la par

export const todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),
  on(toggle, (state, { id }) => {     
    return state.map(todo => {            
      if ( todo.id === id ) {        
        //Estas dos líneas no me modifican el valor del atributo completado en la lista
        //y por lo tanto no me modifica el número de las tareas pendientes en la página
        //todo.completado = !todo.completado;
        //return todo;
        return {
          ...todo,
          completado: !todo.completado
        }
      }  
      else { return todo; }    
    });
  }),
  on(editar, (state, { id, texto }) => { 
    return state.map(todo => {
      if ( todo.id === id ) {        
        return {
          ...todo,
          texto: texto
        }
      }  
      else { return todo; }    
    });
  }),
  on(borrar, ( state, { id } ) => state.filter( todo => todo.id !== id) ),
  on(toggleAll, (state, { completado }) => state.map( todo => {    
    return {
      ...todo,
      completado: completado
    }
  }) ),
  on( limpiarTodos, state => state.filter(todo => !todo.completado))
  
);

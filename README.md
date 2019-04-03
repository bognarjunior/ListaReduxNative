# ListaReduxNative

# Estado do Aplicativo (Store)

[
    {
        id: 1,
        name: 'String'
    },
    {
        id: 2,
        name: 'String'
    },
    {
        id: 3,
        name: 'String'
    }
]

# Actions (Ações)

Para mudar o estado do aplicativo

## ADD_ITEM
{
    type: 'ADD_ITEM',
    id: 1,
    name: 'String'
}

## REMOVE_ITEM
{
    type: 'REMOVE_ITEM',
    id: 1
}

## CLEAR_LISTA
{
    type: 'CLEAR_LISTA'
}

# Reducer (Redutor)

Se receber a ação

## ADD_ITEM
Retorna uma nova lista, incluindo o item fornecido pela ação

## REMOVE_ITEM
Retorna uma nova lista, excluindo o item que é encontrado pelo id fornecido pela ação

## CLEAR_LISTA
Retorna uma lista vazia
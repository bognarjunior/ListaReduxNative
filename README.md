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

## ADICIONAR_ITEM
{
    type: 'ADICIONAR_ITEM',
    id: 1,
    name: 'String'
}

## REMOVER_ITEM
{
    type: 'REMOVER_ITEM',
    id: 1
}

## LIMPAR_LISTA
{
    type: 'LIMPAR_LISTA'
}

# Reducer (Redutor)

Se receber a ação

## ADICIONAR_ITEM
Retorna uma nova lista, incluindo o item fornecido pela ação

## REMOVER_ITEM
Retorna uma nova lista, excluindo o item que é encontrado pelo id fornecido pela ação

## LIMPAR_LISTA
Retorna uma lista vazia
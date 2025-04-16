# Tasks concluidas{

    • Usuários podem fazer login utilizando cpf ou email combinado com a senha.- Feito

    • Valide o formato do email e do cpf (ex.: CPF com 11 dígitos numéricos).

}

# Tasks a fazer {

    • Modúlo conta interna{
        Atributos: id, numero_conta, agencia, saldo.
        Regras:{
            • Cada usuário possui exatamente uma conta interna, criada automaticamente ao se cadastrar.
            • O numero_conta e a agencia devem ser gerados automaticamente (ex.: formato numérico único).
            • O saldo inicial é zero.
            • Recargas de saldo só podem ser realizadas pelo titular da conta, fornecendo o cpf para validação.
            • Não é permitido recarregar valores negativos ou zero.
        }
    }

}

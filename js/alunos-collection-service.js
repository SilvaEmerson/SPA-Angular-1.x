angular.module('aplicacao').service('AlunosCollectionService', function ($filter) {
    
    var ordenarPorIdade = false;
    var ordenarPorNome = false;

    var alunos = [{
            'nome': 'Gauss',
            'idade': 9
        },
        {
            'nome': 'Newton',
            'idade': 11
        },
        {
            'nome': 'Leibniz',
            'idade': 11
        },
        {
            'nome': 'Euler',
            'idade': 14
        },
        {
            'nome': 'Riemann',
            'idade': 10
        },
        {
            'nome': 'Feynman',
            'idade': 12
        }
    ];

    this.getAlunos = function () {
        return alunos;
    }

    this.adicionarAluno = function (aluno) {
        alunos.push(aluno);
    }

    this.ordenarPorNome = function () {
        ordenarPorNome = !ordenarPorNome;
        alunos = $filter('oderBy')(alunos, 'nome', ordenarPorNome);
    };

    this.ordenarPorIdade = function () {
        ordenarPorIdade = !ordenarPorIdade;
        alunos = $filter('orderBy')(alunos, 'idade', ordenarPorIdade);
    };
});
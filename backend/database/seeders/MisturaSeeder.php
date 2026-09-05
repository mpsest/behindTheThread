<?php

namespace Database\Seeders;

use App\Models\Mistura;
use Illuminate\Database\Seeder;

class MisturaSeeder extends Seeder
{
    public function run(): void
    {
        $misturas = [
            [
                'autor' => 'Inês Rocha',
                'nome_projeto' => 'Cápsula Zero Desperdício',
                'descricao' => 'Projeto fictício para criar uma pequena coleção com excedentes têxteis.',
                'regime' => 'Híbrido',
                'localizacao' => 'Lisboa',
                'area' => 'Moda sustentável',
                'data_inicio' => '2026-10-01',
                'duracao' => '6 semanas',
                'orcamento' => 850.00,
                'n_colaboradores' => 3,
                'email' => 'ines.rocha@example.test',
                'telemovel' => '910000001',
                'aprovado' => true,
                'lida' => false,
            ],
            [
                'autor' => 'Tiago Mendes',
                'nome_projeto' => 'Arquivo de Botões',
                'descricao' => 'Inventário fictício de aviamentos antigos para uso em styling editorial.',
                'regime' => 'Remoto',
                'localizacao' => null,
                'area' => 'Pesquisa visual',
                'data_inicio' => '2026-11-15',
                'duracao' => '1 mês',
                'orcamento' => 300.00,
                'n_colaboradores' => 2,
                'email' => 'tiago.mendes@example.test',
                'telemovel' => '910000002',
                'aprovado' => true,
                'lida' => true,
            ],
            [
                'autor' => 'Clara Sousa',
                'nome_projeto' => 'Editorial Matéria Bruta',
                'descricao' => 'Produção fictícia que cruza fotografia, malhas e objetos de arquivo.',
                'regime' => 'Presencial',
                'localizacao' => 'Porto',
                'area' => 'Editorial',
                'data_inicio' => '2026-12-03',
                'duracao' => '3 dias',
                'orcamento' => 1200.00,
                'n_colaboradores' => 5,
                'email' => 'clara.sousa@example.test',
                'telemovel' => '910000003',
                'aprovado' => false,
                'lida' => false,
            ],
        ];

        foreach ($misturas as $mistura) {
            Mistura::updateOrCreate(
                ['nome_projeto' => $mistura['nome_projeto']],
                $mistura,
            );
        }
    }
}

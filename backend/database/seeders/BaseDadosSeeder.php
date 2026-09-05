<?php

namespace Database\Seeders;

use App\Models\Conteudo;
use App\Models\Espaco;
use App\Models\Ferramenta;
use Illuminate\Database\Seeder;

class BaseDadosSeeder extends Seeder
{
    public function run(): void
    {
        Ferramenta::whereIn('nome', [
            'Moodboard Lab',
            'Ficha Técnica Pro',
            'Mapa de Fornecedores',
            'Calculadora de Custos',
        ])->delete();

        Conteudo::whereIn('nome', [
            'Curso Introdução ao Styling',
        ])->delete();

        $espacos = [
            ['nome' => 'Atelier Linha Norte', 'site' => 'https://example.com/atelier-linha-norte', 'email' => 'ola@linhanorte.test', 'localidade' => 'Porto, Portugal', 'categoria' => 'Confeção'],
            ['nome' => 'Oficina Ponto Solto', 'site' => 'https://example.com/ponto-solto', 'email' => 'geral@pontosolto.test', 'localidade' => 'Braga, Portugal', 'categoria' => 'Confeção'],
            ['nome' => 'Tecidos do Bairro', 'site' => 'https://example.com/tecidos-bairro', 'email' => 'info@tecidosbairro.test', 'localidade' => 'Lisboa, Portugal', 'categoria' => 'Tecidos'],
            ['nome' => 'Malharia Circular', 'site' => 'https://example.com/malharia-circular', 'email' => 'contacto@malhariacircular.test', 'localidade' => 'Guimarães, Portugal', 'categoria' => 'Malhas'],
            ['nome' => 'Acessórios Prisma', 'site' => 'https://example.com/acessorios-prisma', 'email' => 'studio@prisma.test', 'localidade' => 'Aveiro, Portugal', 'categoria' => 'Acessórios'],
            ['nome' => 'Tinturaria Azul', 'site' => 'https://example.com/tinturaria-azul', 'email' => 'producao@tinturariaazul.test', 'localidade' => 'Barcelos, Portugal', 'categoria' => 'Transformações'],
            ['nome' => 'Armazém Metro', 'site' => 'https://example.com/armazem-metro', 'email' => 'reservas@armazemmetro.test', 'localidade' => 'Setúbal, Portugal', 'categoria' => 'Armazéns'],
            ['nome' => 'Feira Têxtil Aberta', 'site' => 'https://example.com/feira-textil-aberta', 'email' => 'hello@feiratextil.test', 'localidade' => 'Covilhã, Portugal', 'categoria' => 'Feiras'],
            ['nome' => 'Arquivo do Traje', 'site' => 'https://example.com/arquivo-traje', 'email' => 'visitas@arquivotraje.test', 'localidade' => 'Viana do Castelo, Portugal', 'categoria' => 'Museus'],
            ['nome' => 'Loja Ponto de Encontro', 'site' => 'https://example.com/loja-ponto-encontro', 'email' => 'loja@pontodeencontro.test', 'localidade' => 'Coimbra, Portugal', 'categoria' => 'Lojas'],
        ];

        foreach ($espacos as $espaco) {
            Espaco::updateOrCreate(['nome' => $espaco['nome']], $espaco);
        }

        $ferramentas = [
            ['nome' => 'Tipo Clara', 'site' => 'https://example.com/tipo-clara', 'descricao' => 'Ferramenta fictícia para testar combinações tipográficas.', 'categoria' => 'Tipografia'],
            ['nome' => 'Paleta Viva', 'site' => 'https://example.com/paleta-viva', 'descricao' => 'Gerador fictício de paletas cromáticas para coleções.', 'categoria' => 'Cor'],
            ['nome' => 'Traço Rápido', 'site' => 'https://example.com/traco-rapido', 'descricao' => 'Ferramenta fictícia para criar ilustrações de moda.', 'categoria' => 'Ilustração'],
            ['nome' => 'Banco Imagem Studio', 'site' => 'https://example.com/banco-imagem-studio', 'descricao' => 'Arquivo fictício para procurar imagens de referência.', 'categoria' => 'Imagens'],
            ['nome' => 'Mockup Lab', 'site' => 'https://example.com/mockup-lab', 'descricao' => 'Ferramenta fictícia para aplicar gráficos em peças simuladas.', 'categoria' => 'Mockups'],
            ['nome' => 'Volume 3D', 'site' => 'https://example.com/volume-3d', 'descricao' => 'Ferramenta fictícia para visualizar silhuetas em três dimensões.', 'categoria' => '3D'],
            ['nome' => 'Corte Vídeo', 'site' => 'https://example.com/corte-video', 'descricao' => 'Editor fictício para pequenos vídeos de processo.', 'categoria' => 'Vídeos'],
            ['nome' => 'Textura Scan', 'site' => 'https://example.com/textura-scan', 'descricao' => 'Biblioteca fictícia de texturas digitalizadas.', 'categoria' => 'Texturas'],
            ['nome' => 'Studio Suite', 'site' => 'https://example.com/studio-suite', 'descricao' => 'Software fictício para desenho e preparação de ficheiros.', 'categoria' => 'Softwares'],
            ['nome' => 'Agenda de Coleção', 'site' => 'https://example.com/agenda-colecao', 'descricao' => 'Planeador fictício para acompanhar prazos de desenvolvimento.', 'categoria' => 'Organização'],
            ['nome' => 'Notas de Atelier', 'site' => 'https://example.com/notas-atelier', 'descricao' => 'Ferramenta fictícia para escrever textos de conceito e coleção.', 'categoria' => 'Escrita'],
            ['nome' => 'Som de Fundo', 'site' => 'https://example.com/som-fundo', 'descricao' => 'Arquivo fictício de música e ambientes sonoros para apresentações.', 'categoria' => 'Som'],
        ];

        foreach ($ferramentas as $ferramenta) {
            Ferramenta::updateOrCreate(['nome' => $ferramenta['nome']], $ferramenta);
        }

        $conteudos = [
            ['nome' => 'Manual Fictício de Materiais', 'site' => 'https://example.com/manual-materiais', 'descricao' => 'Guia falso com noções base sobre fibras, tecidos e acabamentos.', 'categoria' => 'Livros'],
            ['nome' => 'Documentário Linha e Forma', 'site' => 'https://example.com/linha-e-forma', 'descricao' => 'Documentário fictício sobre processos criativos no design têxtil.', 'categoria' => 'Filmes'],
            ['nome' => 'Série Atelier Aberto', 'site' => 'https://example.com/atelier-aberto', 'descricao' => 'Série fictícia sobre equipas criativas independentes.', 'categoria' => 'Séries'],
            ['nome' => 'Blog Diário de Amostras', 'site' => 'https://example.com/diario-amostras', 'descricao' => 'Blog fictício sobre experiências com materiais e acabamentos.', 'categoria' => 'Blogs'],
            ['nome' => 'Revista Ponto Manual', 'site' => 'https://example.com/ponto-manual', 'descricao' => 'Revista fictícia dedicada a moda, craft e cultura visual.', 'categoria' => 'Revistas'],
            ['nome' => 'Arquivo Visual de Moda', 'site' => 'https://example.com/arquivo-visual', 'descricao' => 'Repositório fictício de imagens para pesquisa de tendências.', 'categoria' => 'Inspiração'],
            ['nome' => 'Podcast Bastidores Criativos', 'site' => 'https://example.com/bastidores-criativos', 'descricao' => 'Podcast fictício com conversas sobre moda independente.', 'categoria' => 'Podcasts'],
            ['nome' => 'Peça Linhas em Cena', 'site' => 'https://example.com/linhas-em-cena', 'descricao' => 'Espetáculo fictício que cruza figurino, corpo e movimento.', 'categoria' => 'Teatro'],
            ['nome' => 'Canal Costura Experimental', 'site' => 'https://example.com/costura-experimental', 'descricao' => 'Canal fictício com tutoriais e conversas de atelier.', 'categoria' => 'Youtube'],
        ];

        foreach ($conteudos as $conteudo) {
            Conteudo::updateOrCreate(['nome' => $conteudo['nome']], $conteudo);
        }

        $this->seedEspacosExtra();
        $this->seedFerramentasExtra();
        $this->seedConteudosExtra();
    }

    private function seedEspacosExtra(): void
    {
        $categorias = [
            'Confeção' => 'Atelier de Confeção',
            'Tecidos' => 'Fornecedor de Tecidos',
            'Malhas' => 'Estúdio de Malhas',
            'Acessórios' => 'Casa de Acessórios',
            'Transformações' => 'Oficina de Transformações',
            'Armazéns' => 'Armazém Criativo',
            'Feiras' => 'Feira Independente',
            'Museus' => 'Museu e Arquivo',
            'Lojas' => 'Loja de Autor',
        ];
        $localidades = ['Lisboa', 'Porto', 'Braga', 'Coimbra', 'Aveiro', 'Guimarães', 'Barcelos', 'Covilhã'];

        foreach ($categorias as $categoria => $prefixo) {
            for ($i = 1; $i <= 6; $i++) {
                $nome = "{$prefixo} {$i}";
                $slug = $this->slug($nome);

                Espaco::updateOrCreate(
                    ['nome' => $nome],
                    [
                        'nome' => $nome,
                        'site' => "https://example.com/{$slug}",
                        'email' => "contacto@{$slug}.test",
                        'localidade' => $localidades[($i - 1) % count($localidades)] . ', Portugal',
                        'categoria' => $categoria,
                    ],
                );
            }
        }
    }

    private function seedFerramentasExtra(): void
    {
        $categorias = [
            'Tipografia',
            'Cor',
            'Ilustração',
            'Imagens',
            'Mockups',
            '3D',
            'Vídeos',
            'Texturas',
            'Softwares',
            'Organização',
            'Escrita',
            'Som',
        ];

        foreach ($categorias as $categoria) {
            for ($i = 1; $i <= 6; $i++) {
                $nome = "{$categoria} Tool {$i}";
                $slug = $this->slug($nome);

                Ferramenta::updateOrCreate(
                    ['nome' => $nome],
                    [
                        'nome' => $nome,
                        'site' => "https://example.com/{$slug}",
                        'descricao' => "Ferramenta fictícia de {$categoria} para apoiar pesquisa, experimentação e produção criativa.",
                        'categoria' => $categoria,
                    ],
                );
            }
        }
    }

    private function seedConteudosExtra(): void
    {
        $categorias = [
            'Livros' => 'Publicação',
            'Filmes' => 'Filme',
            'Séries' => 'Série',
            'Blogs' => 'Blog',
            'Revistas' => 'Revista',
            'Inspiração' => 'Arquivo Inspiracional',
            'Podcasts' => 'Podcast',
            'Teatro' => 'Peça',
            'Youtube' => 'Canal',
        ];

        foreach ($categorias as $categoria => $prefixo) {
            for ($i = 1; $i <= 6; $i++) {
                $nome = "{$prefixo} {$i}";
                $slug = $this->slug("{$categoria} {$nome}");

                Conteudo::updateOrCreate(
                    ['nome' => $nome, 'categoria' => $categoria],
                    [
                        'nome' => $nome,
                        'site' => "https://example.com/{$slug}",
                        'descricao' => "Conteúdo fictício na categoria {$categoria}, pensado para alimentar a base de dados de referência.",
                        'categoria' => $categoria,
                    ],
                );
            }
        }
    }

    private function slug(string $value): string
    {
        $value = iconv('UTF-8', 'ASCII//TRANSLIT', $value);
        $value = strtolower((string) preg_replace('/[^A-Za-z0-9]+/', '-', $value));

        return trim($value, '-');
    }
}

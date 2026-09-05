<?php

namespace Database\Seeders;

use App\Models\Artigo;
use App\Models\Designer;
use App\Models\DirtyTalk;
use App\Models\Keyword;
use Illuminate\Database\Seeder;

class ConteudoEditorialSeeder extends Seeder
{
    public function run(): void
    {
        $artigos = [
            [
                'titulo' => 'Como preparar uma mini coleção sem perder o fio',
                'imagem' => 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
                'texto' => '<p>Este artigo fictício reúne passos simples para transformar uma ideia inicial numa coleção pequena, coerente e pronta a apresentar.</p>',
                'keywords' => ['coleção', 'planeamento', 'processo'],
            ],
            [
                'titulo' => 'Materiais esquecidos que podem voltar ao atelier',
                'imagem' => 'https://images.unsplash.com/photo-1523381294911-8d3cead13475',
                'texto' => '<p>Uma exploração falsa de reaproveitamento de amostras, restos de produção e tecidos parados.</p>',
                'keywords' => ['materiais', 'sustentabilidade', 'atelier'],
            ],
            [
                'titulo' => 'Do moodboard à primeira peça',
                'imagem' => 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
                'texto' => '<p>Notas fictícias sobre como traduzir referências visuais em decisões concretas de cor, forma e textura.</p>',
                'keywords' => ['moodboard', 'design', 'prototipagem'],
            ],
        ];

        foreach ($artigos as $data) {
            $this->createWithKeywords(Artigo::class, $data);
        }

        $dirtyTalks = [
            [
                'titulo' => 'O que ninguém te diz sobre mandar produzir fora',
                'imagem' => 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
                'texto' => '<p>Conversa fictícia sobre expectativas, comunicação com fornecedores e margens de erro no processo.</p>',
                'keywords' => ['produção', 'fornecedores', 'conversa'],
            ],
            [
                'titulo' => 'Criar devagar também é uma estratégia',
                'imagem' => 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
                'texto' => '<p>Reflexão falsa sobre ritmo criativo, limites de equipa e escolhas conscientes.</p>',
                'keywords' => ['estratégia', 'processo', 'independente'],
            ],
        ];

        foreach ($dirtyTalks as $data) {
            $this->createWithKeywords(DirtyTalk::class, $data);
        }

        $designers = [
            [
                'titulo' => 'Marta Vale',
                'imagem' => 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
                'texto' => '<p>Perfil fictício de uma designer que trabalha com malhas experimentais e pequenas séries.</p>',
                'keywords' => ['malhas', 'perfil', 'designer'],
            ],
            [
                'titulo' => 'Estúdio Nó',
                'imagem' => 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
                'texto' => '<p>Estúdio fictício focado em acessórios têxteis, pesquisa manual e produção local.</p>',
                'keywords' => ['acessórios', 'estúdio', 'local'],
            ],
        ];

        foreach ($designers as $data) {
            $this->createWithKeywords(Designer::class, $data);
        }
    }

    private function createWithKeywords(string $modelClass, array $data): void
    {
        $keywordNames = $data['keywords'];
        unset($data['keywords']);

        $content = $modelClass::updateOrCreate(
            ['titulo' => $data['titulo']],
            $data,
        );

        $keywordIds = [];
        foreach ($keywordNames as $keywordName) {
            $keywordIds[] = Keyword::firstOrCreate(['palavra' => $keywordName])->id;
        }

        $content->keywords()->sync($keywordIds);
    }
}

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
        $gibberishText = <<<'HTML'
<p>Lumora til vensai, drape nuno cali sobre a linha marfim do corpo, enquanto o corte respira em camadas lentas e quase minerais. A peça nasce de um gesto inventado, entre tecido, pele, sombra e vitrine, como se cada costura guardasse uma pequena conversa sem tradução.</p>
<p>Bravena sol atelier, moda fira cante, volume aberto, gola oblíqua, manga suspensa, textura viva. O desenho avança com uma lógica meio torta e meio precisa: primeiro a silhueta, depois o ruído da cor, depois a memória de uma passerelle que nunca existiu mas podia ter ficado gravada num caderno cheio de manchas.</p>
<p>Não há tese, só matéria em movimento. Ravia monder, sete pontos de luz, um modelo parado no centro, o casaco a cair como arquitetura macia, os acessórios a responder em metal baço. Tudo parece ensaio, mas o conjunto fecha-se com uma estranha coerência visual.</p>
<p>Quando a coleção encontra o olhar, o texto desfaz-se em palavras de prova: veludo, nylon, tule, algodão, ombro, bainha, pausa. Ficam pistas soltas para imaginar processos, falhas, escolhas e pequenas decisões de design que transformam uma ideia difusa numa presença completa.</p>
HTML;

        $artigos = [
            [
                'titulo' => 'Como preparar uma mini coleção sem perder o fio',
                'imagem' => 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
                'texto' => $gibberishText,
                'keywords' => ['design', 'coleção', 'planeamento', 'processo'],
            ],
            [
                'titulo' => 'Materiais esquecidos que podem voltar ao atelier',
                'imagem' => 'https://images.unsplash.com/photo-1523381294911-8d3cead13475',
                'texto' => $gibberishText,
                'keywords' => ['design', 'materiais', 'sustentabilidade', 'atelier'],
            ],
            [
                'titulo' => 'Do moodboard à primeira peça',
                'imagem' => 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
                'texto' => $gibberishText,
                'keywords' => ['moodboard', 'design', 'prototipagem'],
            ],
            [
                'titulo' => 'Silhuetas que parecem conversar com a rua',
                'imagem' => 'https://images.unsplash.com/photo-1509631179647-0177331693ae',
                'texto' => $gibberishText,
                'keywords' => ['design', 'silhueta', 'editorial', 'moda'],
            ],
            [
                'titulo' => 'A cor como ferramenta de provocação',
                'imagem' => 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
                'texto' => $gibberishText,
                'keywords' => ['design', 'cor', 'imagem', 'produção'],
            ],
            [
                'titulo' => 'Peças que nascem entre arquivo e performance',
                'imagem' => 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3',
                'texto' => $gibberishText,
                'keywords' => ['design', 'arquivo', 'performance', 'coleção'],
            ],
            [
                'titulo' => 'O detalhe invisível que segura uma coleção',
                'imagem' => 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
                'texto' => $gibberishText,
                'keywords' => ['design', 'detalhe', 'acabamentos', 'processo'],
            ],
            [
                'titulo' => 'Quando o styling muda a narrativa',
                'imagem' => 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
                'texto' => $gibberishText,
                'keywords' => ['design', 'styling', 'narrativa', 'editorial'],
            ],
        ];

        foreach ($artigos as $data) {
            $this->createWithKeywords(Artigo::class, $data);
        }

        $dirtyTalks = [
            [
                'titulo' => 'O que ninguém te diz sobre mandar produzir fora',
                'imagem' => 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
                'texto' => $gibberishText,
                'keywords' => ['design', 'produção', 'fornecedores', 'conversa'],
            ],
            [
                'titulo' => 'Criar devagar também é uma estratégia',
                'imagem' => 'https://images.unsplash.com/photo-1706765779494-2705542ebe74',
                'texto' => $gibberishText,
                'keywords' => ['design', 'estratégia', 'processo', 'independente'],
            ],
            [
                'titulo' => 'Aquela prova em que tudo parecia errado',
                'imagem' => 'https://images.unsplash.com/photo-1485231183945-fffde7cb34eb',
                'texto' => $gibberishText,
                'keywords' => ['design', 'prova', 'atelier', 'erro'],
            ],
            [
                'titulo' => 'Falar de orçamento sem matar a ideia',
                'imagem' => 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
                'texto' => $gibberishText,
                'keywords' => ['design', 'orçamento', 'processo', 'negociação'],
            ],
            [
                'titulo' => 'O drama silencioso dos acabamentos',
                'imagem' => 'https://images.unsplash.com/photo-1551232864-3f0890e580d9',
                'texto' => $gibberishText,
                'keywords' => ['design', 'acabamentos', 'qualidade', 'detalhe'],
            ],
            [
                'titulo' => 'Quando a referência vira cópia sem avisar',
                'imagem' => 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
                'texto' => $gibberishText,
                'keywords' => ['design', 'referência', 'autoria', 'crítica'],
            ],
            [
                'titulo' => 'Backstage de uma coleção quase pronta',
                'imagem' => 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03',
                'texto' => $gibberishText,
                'keywords' => ['design', 'backstage', 'coleção', 'moda'],
            ],
        ];

        foreach ($dirtyTalks as $data) {
            $this->createWithKeywords(DirtyTalk::class, $data);
        }

        $designers = [
            [
                'titulo' => 'Marta Vale',
                'imagem' => 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
                'texto' => $gibberishText,
                'keywords' => ['design', 'malhas', 'perfil', 'designer'],
            ],
            [
                'titulo' => 'Estúdio Nó',
                'imagem' => 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2',
                'texto' => $gibberishText,
                'keywords' => ['design', 'acessórios', 'estúdio', 'local'],
            ],
            [
                'titulo' => 'Lia Fontes',
                'imagem' => 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
                'texto' => $gibberishText,
                'keywords' => ['design', 'perfil', 'alfaiataria', 'moda'],
            ],
            [
                'titulo' => 'Casa Vértice',
                'imagem' => 'https://images.unsplash.com/photo-1604871000636-074fa5117945',
                'texto' => $gibberishText,
                'keywords' => ['design', 'estúdio', 'cor', 'editorial'],
            ],
            [
                'titulo' => 'Nora Albano',
                'imagem' => 'https://images.unsplash.com/photo-1542596594-649edbc13630',
                'texto' => $gibberishText,
                'keywords' => ['design', 'designer', 'arquivo', 'silhueta'],
            ],
            [
                'titulo' => 'Atelier Fio Raso',
                'imagem' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
                'texto' => $gibberishText,
                'keywords' => ['design', 'atelier', 'produção', 'coleção'],
            ],
            [
                'titulo' => 'Rui Alva',
                'imagem' => 'https://images.unsplash.com/photo-1536243298747-ea8874136d64',
                'texto' => $gibberishText,
                'keywords' => ['design', 'perfil', 'streetwear', 'imagem'],
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

import { Link } from "react-router-dom";
import SquareButton from "../../components/SquareButton.jsx";
import MisturasSquare from "../../components/Misturas/MisturasSquare.jsx";
import { useHomeLatest } from "../../hooks/useApi.js";
import "./Home.css";

function LoadingPlaceholders({ sectionKey }) {
  return Array.from({ length: 3 }, (_, index) => (
    <div
      className="home-latest-placeholder"
      key={`${sectionKey}-placeholder-${index}`}
    />
  ));
}

function ContentCards({ items, sectionKey, route }) {
  return items.map((item) => (
    <Link
      className="home-latest-card"
      key={`${sectionKey}-${item.id}`}
      to={`/${route}/${item.id}`}
    >
      <img src={item.imagem} alt={item.titulo} />
      <span>{item.titulo}</span>
    </Link>
  ));
}

function MisturasCards({ items }) {
  return items.map((item, index) => (
    <Link
      className="home-latest-card home-latest-card-mistura"
      key={`misturas-${item.id}`}
      to={`/misturas/${item.id}`}
    >
      <MisturasSquare mistura={item} index={index} />
    </Link>
  ));
}

export default function Home() {
  const { latest, loading, error } = useHomeLatest();

  return (
    <section className="home-page" aria-label="Homepage">
      <section className="home-section home-section-dirtyTalks">
        <div className="home-section-hero">
          <div className="home-brand-panel">
            <h2>Dirty Talks</h2>
            <Link className="home-cta-link" to="/dirtytalks">
              <SquareButton className="home-cta">
                Quero ler algo spicy
              </SquareButton>
            </Link>
          </div>
          <div className="home-headline-panel">
            <p>Mais depressa se apanha um mentiroso do que um coxo</p>
          </div>
        </div>
        {error && (
          <p className="home-status">Não foi possível carregar conteúdos.</p>
        )}
        {!error && (
          <div className="home-latest-grid">
            {loading ? (
              <LoadingPlaceholders sectionKey="dirtyTalks" />
            ) : (
              <ContentCards
                items={latest.dirtyTalks}
                sectionKey="dirtyTalks"
                route="dirtytalks"
              />
            )}
          </div>
        )}
      </section>

      <section className="home-section home-section-artigos">
        <div className="home-section-hero">
          <div className="home-brand-panel">
            <h2>Artigos</h2>
            <div className="d-flex justify-content-between align-items-end">
              <div className="home-headline-panel">
                <p>no meio e que esta a virtude, já dizia eu há anos</p>
              </div>
              <Link className="home-cta-link align-self-end" to="/artigos">
                <SquareButton className="home-cta">
                  Quero ler artigos
                </SquareButton>
              </Link>
            </div>
          </div>
        </div>
        {error && (
          <p className="home-status">Não foi possível carregar conteúdos.</p>
        )}
        {!error && (
          <div className="home-latest-grid">
            {loading ? (
              <LoadingPlaceholders sectionKey="artigos" />
            ) : (
              <ContentCards
                items={latest.artigos}
                sectionKey="artigos"
                route="artigos"
              />
            )}
          </div>
        )}
      </section>

      <section className="home-section home-section-designers">
        <div className="home-section-hero">
          <div className="home-headline-panel">
            <p>o segredo é a alma do negócio</p>
          </div>
          <div className="home-brand-panel">
            <h2>Designers</h2>
            <Link className="home-cta-link align-self-end" to="/designers">
              <SquareButton className="home-cta">
                Qual é o segredo?
              </SquareButton>
            </Link>
          </div>
        </div>
        {error && (
          <p className="home-status">Não foi possível carregar conteúdos.</p>
        )}
        {!error && (
          <div className="home-latest-grid">
            {loading ? (
              <LoadingPlaceholders sectionKey="designers" />
            ) : (
              <ContentCards
                items={latest.designers}
                sectionKey="designers"
                route="designers"
              />
            )}
          </div>
        )}
      </section>

      <section className="home-directory-section home-section-base-dados flex-row">
        <div className="col-8">
          <h2>Base de Dados</h2>
          <p>
            Queres um lugar onde podes comprar os tecidos mais baratos, aquela
            tipografia grátis que mais ninguém tem ou aqueles filmes para ver ao
            fim de semana?
          </p>
          <Link className="home-cta-link" to="/basededados">
            <SquareButton className="home-cta">Encontra aqui</SquareButton>
          </Link>
        </div>
        <div className="col-4 home-headline-panel">
          <p>nem tudo o que vem à rede é peixe</p>
        </div>
      </section>

      <section className="home-section home-section-misturas">
        <div className="home-section-hero">
          <div className="home-brand-panel">
            <h2>Misturas</h2>
            <div className="d-flex justify-content-between align-items-end">
              <div className="home-headline-panel">
                <p>Amigos amigos, negócios à parte</p>
              </div>
              <Link className="home-cta-link align-self-end" to="/misturas">
                <SquareButton className="home-cta">Ver misturas</SquareButton>
              </Link>
            </div>
          </div>
        </div>
        {error && (
          <p className="home-status">Não foi possível carregar conteúdos.</p>
        )}
        {!error && (
          <div className="home-latest-grid">
            {loading ? (
              <LoadingPlaceholders sectionKey="misturas" />
            ) : (
              <MisturasCards items={latest.misturas} />
            )}
          </div>
        )}
      </section>
    </section>
  );
}

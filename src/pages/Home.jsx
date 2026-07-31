import { Header } from '../components/Header';
import { About } from '../components/About';
import { ProjectGrid } from '../components/ProjectGrid';

export function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <About />
        <ProjectGrid />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Diogenes Cassimiro
      </footer>
    </div>
  );
}

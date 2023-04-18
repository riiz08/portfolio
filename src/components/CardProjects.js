import Card from "../components/Card";
import p1 from "../p1.jpg";
import p2 from "../p2.jpg";
import p3 from "../p3.jpg";
import p4 from "../p4.jpg";
import p5 from "../p5.jpg";

const CardProjects = () => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <Card
        img={p1}
        title="Hoshi survey Form"
        url="https://riiz08.github.io/hoshi-survey-form/"
        description="responsive web design freecodecamp project"
      />
      <Card
        img={p2}
        title="Tribute Page"
        url="https://riiz08.github.io/tribute-pages/"
        description="responsive web design freecodecamp project"
      />
      <Card
        img={p3}
        title="Dynamic web"
        url="https://riiz08.github.io/dynamic-2/"
        description="responsive web design freecodecamp project"
      />
      <Card
        img={p4}
        title="Search movie"
        url="https://riiz08.github.io/search-movie/"
        description="Search movie web, consume public api from IMDB"
      />
      <Card
        img={p5}
        title="Streaming anime web"
        url="https://riiz08.github.io/anime-streaming-page/"
        description="Watch anime sub english, consume api from comsumet.org Api"
      />
    </div>
  );
};

export default CardProjects;

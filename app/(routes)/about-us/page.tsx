import Container from "@/components/ui/container";
import Image from "next/image";
import MotherDaughter from "../../../public/mother_daughter.png";

const AboutUsPage = async () => {
  return (
    <Container>
      <div className="space-y-8 pb-10 min-h-screen px-4">
        <h1 className="my-10 text-3xl font-bold">
          About Us - Nadejda & Neda Todorova
        </h1>
        <Image src={MotherDaughter} alt="" />
        <p>
          A Mother-Daughter Artistic Duo Welcome to our world of creativity and
          passion! We are Nadejda and Neda Todorova, the heart and soul behind
          this vibrant portfolio of art, designer clothing, and handmade
          souvenirs.
        </p>
        <p>
          Nadejda Todorova: A lifelong artist, I have spent years honing my
          skills and nurturing my love for creating beautiful things. From
          intricate paintings to bespoke garments, my work is a testament to a
          life devoted to art. Each piece I create carries a part of my journey
          and the joy I find in every brushstroke and stitch.
        </p>
        <p>
          Neda Todorova: As a young and enthusiastic artist, I bring a fresh
          perspective and boundless energy to our creations. My passion for
          design and craftsmanship shines through in every piece, whether it`s a
          uniquely designed outfit, a striking piece of art, or a charming
          handmade souvenir. I believe in the power of art to connect, inspire,
          and bring joy to everyday life.
        </p>
        <p>
          Together, we blend experience with innovation, tradition with
          modernity. Our collaborative works are more than just products; they
          are stories woven into fabric and canvas, waiting to be a part of your
          life. Each creation is a labor of love, meticulously crafted to ensure
          that you receive a piece that is not only aesthetically pleasing but
          also imbued with emotion and care. Thank you for visiting our site and
          taking the time to learn about us. We hope that our art resonates with
          you and brings a touch of beauty to your world.
        </p>
      </div>
    </Container>
  );
};

export default AboutUsPage;

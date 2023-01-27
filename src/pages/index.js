import BookCard from "@/components/BookCard/BookCard";
import Button from "@/components/Button/Button";
import styles from "src/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-4">
        <div className="flex flex-col items-start justify-center pl-40 col-start-1 col-end-4">
          <h1 className="font-semibold text-8xl mb-12">The Book Store</h1>
          <p className="text-lg max-w-[600px] leading-snug">
            Est duis adipisicing exercitation elit magna ex tempor reprehenderit. Sit ex ipsum eu eiusmod nostrud irure cupidatat Lorem mollit esse tempor. 
            Deserunt laborum deserunt pariatur est deserunt dolore aliqua pariatur consectetur commodo do minim ipsum. 
            Quis consectetur occaecat cupidatat fugiat minim pariatur aute irure sint non sunt aute. Quis adipisicing cupidatat deserunt aliqua anim cupidatat.
          </p>
          <Button text="Read More"/>
        </div>
        <div className="h-screen bg-brand-brown"></div>
        <div className="absolute w-[400px] bg-white rounded-xl shadow-md h-[650px] right-60 top-32">
          <BookCard
            url="/quijote.png"
            title="El Ingenioso Hidalgo Don Quijote De La Mancha"
            text="(Sic) editorial se dio a la tarea de recuperar el libro original. Esta edición se basó en ediciones facsímiles de la obra publicada por Cervantes en 1605."
            price="$229.99"
          />
        </div>
      </main>
    </>
  )
}

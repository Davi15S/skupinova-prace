import React from "react";
import Image from "next/image";

function ArticleDetail() {
  return (
    <div className="div ">
      <div className="image w-full justify-center items-center flex relative h-[589px]">
        <Image
          className=" object-cover "
          layout="fill"
          src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></Image>
      </div>
      <div className="content py-24">
        <div className=" flex justify-center">
          <p className=" text-[#00084ECC] text-6xl ">
            Jak vzdělávat efektivně? – Ing. Radko Sáblík
          </p>
        </div>
        <div className="wrapper font-Montserrat text-[#00084ECC] flex mt-16 px-80 ">
          <div className="details flex flex-col items-center gap-5 w-1/4 ">
            <p>06.06.2022</p>
            <p>Autor: Admin</p>
            <p className="bg-[#6DBDD03B] w-[199px] h-[45px] flex justify-center items-center">
              Společnost
            </p>
          </div>
          <div className="content text-[20px] w-2/3">
            Níže jsou naznačeny principy vzdělávání, které jako pedagogický lídr
            prosazuji a budu prosazovat na naší škole. O jejichž vhodnosti budu
            přesvědčovat učitele i studenty, snažit se je prosadit pomocí vnější
            i vnitřní motivace učitelů i studentů. Níže v textu popisuji, jak
            chci, aby vzdělávání vypadalo na Smíchovské SPŠ a gymnáziu. Přitom
            chápu, že se nemusí líbit některým učitelům a některým studentům.
            Některým jen proto, že musí vystoupit ze své komfortní zóny a změnit
            svůj styl práce či studia. Přesto je o to žádám, dávám jim určitý
            čas, budu se je snažit motivovat. Někteří jsou však natolik zásadově
            ukotveni v systému vzdělávání z předchozí doby, že nejsou ochotní
            přijmout nevratné změny ve společnosti. Dokonce jsou vnitřně
            přesvědčeni, že mnou naznačené principy jsou špatné či nevhodné. To
            je též legitimní a já jejich názor respektuji. Ale také je zároveň
            žádám, aby opravdu vážně přemýšleli nad změnou místa svého působení.
            Je opravdu mnoho jiných škol, kde tradiční konzervativní vzdělávání
            praktikují a asi i ještě dlouho praktikovat budou. Tam se jistě
            budou cítit komfortněji, šťastněji, tam pro ně bude jejich práce či
            studium příjemnější. To není nic osobního, to není nic špatného. Ne
            každý učitel chce být učitelem kreativním, experimentujícím,
            hledajícím nové cesty. Ne každý student chce přebírat za své
            vzdělávání zodpovědnost. Neříká to nic o tom, že by byli špatní,
            pouze mají jiné priority, jiné vrozené schopnosti, jinou životní
            filosofii. Změna místa působení není nic neobvyklého a hledat si
            zaměstnání a školu tak, aby vyhovovala mému naturelu, je naprosto
            legitimní. A dokonce i žádoucí. Do práce i do školy bychom se měli
            těšit. Nebo alespoň tam nechodit s tím, že jsme předem otráveni,
            negativně naladěni, neboť nejsme vnitřně smířeni s tím, co máme
            konat. Pozitivní nálada nám dává energii, negativní nám přináší
            frustraci, depresi. Jako ředitel školy mám zájem na spolupráci se
            všemi učiteli i všemi studenty. Jako pedagogický lídr mám však za
            povinnost stanovit vizi školy, která navíc u kulatých stolů byla
            mnohokráte prodiskutována s učiteli, absolventy a studenty, a tu
            také v rámci mých kompetencí prosazovat. Také ji různě vylepšovat,
            podle zpětné vazby, na základě získaných zkušeností, diskusí u
            dalších kulatých stolů. Chápu, že nemusí být moje vize vzdělávání,
            mimochodem výrazně obsažená ve Strategii 2030+, komfortní pro
            všechny, a pak je pro ně zcela legitimní se zamyslet nad svým dalším
            působením na naší škole.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;

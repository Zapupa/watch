import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto, Montserrat, Epilogue } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";

import bigImage from "@/public/biImage.png";
import aboutImage from "@/public/aboutPng.png";
import watchCardPlaceholder from "@/public/watch_card.png";
import newImage1 from "@/public/newImage1.png";
import newImage2 from "@/public/newImage2.png";
import saleImg1 from "@/public/saleImg1.png";
import saleImg2 from "@/public/saleImg2.png";
import saleImg3 from "@/public/saleImg3.png";
import saleImg4 from "@/public/saleImg4.png";
import saleImgBig from "@/public/saleImgBig.png";

import Slider from "@/components/Slider/Slider";
const epilogue = Epilogue({ subsets: ["latin"] });

import Modal from "@/components/Modal/Modal";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main_bg}>
        <div className={styles.main_page}>
          <Header />
          <main className={styles.main}>
            <div className={styles.text}>
              <h1 className={`${styles.h1} ${epilogue.className}`}>
                Welcome to our collection of premium watches
              </h1>
              <div className={`${styles.description} ${epilogue.className}`}>
                Our watches are not just timepieces, but also an expression of
                your personality and lifestyle. From classic designs to modern
                ones, we have a watch to suit every taste and occasion.
              </div>
            </div>
            <div className={styles.imgs}>
              <div className={styles.slider}>
                <Slider />
              </div>
              <Image
                src={bigImage}
                className={styles.image}
                alt="watch"
              ></Image>
            </div>
          </main>
        </div>
      </div>
      <div className={styles.about_bg} id="about">
        <div className={styles.about_page}>
          <h2 className={`${styles.title} ${epilogue.className}`}>About us</h2>
          <main className={styles.about_main}>
            <div className={`${styles.about_text} ${epilogue.className}`}>
              <div>
                Welcome to our premium watch collection, where luxury and style
                meet functionality and precision. Our selection of timepieces
                embodies the very best in Swiss craftsmanship and engineering,
                ensuring that you'll always have a reliable and stylish
                accessory on your wrist.
              </div>
              <div>
                At our premium watch collection, we believe that a watch is more
                than just a timekeeping device – it's a statement piece that
                reflects your personality and style. So why settle for anything
                less than the best? Browse our collection today and discover the
                perfect watch for you.
              </div>
            </div>
            <Image src={aboutImage} className={styles.image} alt="watch" />
          </main>
        </div>
      </div>
      <div className={styles.catalog_bg} id="catalog">
        <div className={styles.catalog_page}>
          <h2 className={`${styles.title} ${epilogue.className}`}>Catalog</h2>
          <main className={styles.catalog_main}>
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
            <Card
              title="Tube Watch S42 Date Steel With Black Case"
              price="€395"
              img={watchCardPlaceholder}
            />
          </main>
          <div className={styles.catalog_btn_wrap}>
            <div className={styles.catalog_btn}>
              <Button>Buy now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.new_bg}>
        <div className={styles.new_page}>
          <div className={styles.new_head}>
            <div className={`${styles.new_head_text} ${epilogue.className}`}>
              New watches
            </div>
            <div className={`${styles.title} ${epilogue.className}`}>
              Green And Bronze—The Match Made In Heaven
            </div>
          </div>
          <div className={styles.new_imgs}>
            <Image src={newImage1} alt="watch" />
            <Image src={newImage2} alt="watch" />
          </div>
        </div>
      </div>
      <div className={styles.sale_bg} id="sale">
        <div className={styles.sale_page}>
          <div className={`${styles.title} ${epilogue.className}`}>Sale</div>
          <div className={styles.sale_main}>
            <div className={styles.sale_imgs}>
              <div className={styles.sale_mini_imgs}>
                <Image
                  className={styles.sale_mini_img}
                  src={saleImg1}
                  alt="watch"
                />
                <Image
                  className={styles.sale_mini_img}
                  src={saleImg2}
                  alt="watch"
                />
                <Image
                  className={styles.sale_mini_img}
                  src={saleImg3}
                  alt="watch"
                />
                <Image
                  className={styles.sale_mini_img}
                  src={saleImg4}
                  alt="watch"
                />
              </div>
              <Image className={styles.sale_img} src={saleImgBig} alt="watch" />
            </div>
            <div className={`${styles.sale_text} ${epilogue.className}`}>
              <div className={styles.sale_block_top}>
                <div className={styles.sale_title_wrap}>
                  <div className={styles.sale_title}>
                    Greenlane Watch By Police For MenHT
                  </div>
                  <div className={styles.sale_tag}>
                    Product tag: PEWJK2227003
                  </div>
                </div>
                <div className={styles.sale_price}>
                  <div className={styles.new_price}>€700</div>
                  <div className={styles.old_price}>€1000</div>
                </div>
              </div>
              <div className={styles.sale_block_wrap}>
                <div className={styles.sale_block}>
                  <div className={styles.sale_block_title}>
                    <div>Description</div>
                    <div className={styles.sale_acc_btn} />
                  </div>
                  <div className={styles.sale_desc}>
                    Richly detailed with an understated design - the Police
                    Men’s Greenlane watch features a versatile multifunction
                    design that fits effortlessly into work and play. The steel
                    case is adorned with a semi-transparent black dial. The
                    timepiece exhibits a contrast through a black IP bracelet
                    with matching crown and pushers.
                  </div>
                </div>
                <div className={styles.sale_block}>
                  <div className={styles.sale_block_title}>
                    <div>DETAILS & FEATUREStion</div>
                    <div className={styles.sale_acc_btn} />
                  </div>
                  <div className={styles.sale_desc}>
                    Gender: man <br />
                    Size: 46x54.5mm <br />
                    Case Colour: Steel <br />
                    Band Material: Metal <br />
                    Case Material: Metal <br />
                    Features: Multifunction <br />
                    Water Resistant: 5 (ATM) <br />
                    Band Colour: Steel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

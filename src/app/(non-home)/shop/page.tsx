import ShopSlideshow from '@/components/ShopSlideshow/ShopSlideshow';
import './Shop.scss';
import ShopItem from '@/components/ShopItem/ShopItem';
import { ShopItems } from './constants';

export default function Contact() {
  return (
    <main className="shop_page">
      <ShopSlideshow />
      <section className="main-content">
        <h1 className="shop-gallery-title">
          Playtime Club for Designers Collection
        </h1>
        <div className="shop-gallery">
          {ShopItems.map(item => (
            <ShopItem
              key={item.name}
              name={item.name}
              price={item.price}
              description={item.description}
              sizesAvailable={item.sizesAvailable}
              images={item.images}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Shop | Design Co'
};

import ShopSlideshow from '@/components/ShopSlideshow/ShopSlideshow';
import './Shop.scss';

export default function Contact() {
  return (
    <main className="shop_page">
      <ShopSlideshow />
      <section className="main-content">
        <h1>Shop</h1>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Shop | Design Co'
};

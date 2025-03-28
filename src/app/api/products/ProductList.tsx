import { createClient } from "@libsql/client";

if (!process.env.TURSO_DB_URL || !process.env.TUSRO_AUTH_TOKEN) {
  throw new Error("Missing URL or AUTH TOKEN in environment variables!");
}

const db = createClient({
  url: process.env.TURSO_DB_URL!,
  authToken: process.env.TUSRO_AUTH_TOKEN!,
});

export type Product = {
  id: string;
  name: string;
  img: string;
  description: string;
  category: string;
  price: number;
};

async function getProducts() {
  const products = await db.execute(
    "SELECT products.*, categories.name as category FROM products JOIN categories ON products.category_id = categories.id"
  );
  return products.rows as unknown as Product[];
}

export default async function ProductList() {
  const products = await getProducts();

  const groupedProducts = products.reduce<{ [key: string]: Product[] }>(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {}
  );

  return (
    <ul className="grid grid-cols-1 mx-auto py-4">
      {Object.entries(groupedProducts).map(([category, items]) => (
        <li key={category}>
          <h2 className="text-2xl font-bold text-center py-2">{category}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto place-items-center gap-4 border-b-2 border-[#D4AF37] pb-2">
            {items.map((product) => (
              <li
                key={product.id}
                className="w-64 h-80 bg-[#272727] rounded-lg shadow-lg flex flex-col justify-end p-4 text-white relative overflow-hidden group"
                style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative group">
                  <div className="md:absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 rounded-md transform md:translate-y-10 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-lg font-semibold">{product.name}</p>
                    <div className="flex flex-col text-sm md:opacity-0 md:translate-y-20 group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                      <p>{product.description}</p>
                      <p className="text-md">
                        ʛ{" "}
                        <span className="text-[#D4AF37]">{product.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

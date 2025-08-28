import Layout from "@/components/Layout/Layout";
import SearchUser from "@/components/Search/SearchUser";
export default function Home() {
  return (
    <>
      <Layout>
        <SearchUser img="/globe.svg" title={'Guest'} />

      </Layout>
    </>
  );
}

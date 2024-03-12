import React, { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import Layout from "./Layout";

const MyComponent = () => {
  const apiUrl = "http://127.0.0.1:8000/clients/";

  const { data, loading, error, fetchData } = useFetch(apiUrl);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Layout>
      <div>
        <h1>Data from DRF API</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.email}
              {item.username}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default MyComponent;

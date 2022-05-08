import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length >= 2) {
    return (
      <h3>
        Viewing features {params[3]} of docs and the concepts {params[1]}
      </h3>
    );
  } else if (params.length === 1) {
    return <h3>Viewing features {params[0]} of docs</h3>;
  }
  return <div>All Documentations</div>;
}

export default Docs;

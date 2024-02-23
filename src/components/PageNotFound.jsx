import BackButton from "./BackButton";

function PageNotFound() {
  return ( 
    <div className="flex flex-col gap-2 items-center pt-8" >
      <h1>Ops, we are getting 404! Page not found. Where is it then?</h1>
      <BackButton />
    </div>
   );
}

export default PageNotFound;
import Category from "./category";

interface Categories {
  default_name: string;
  file_name: string;
}

interface CategoryList {
  categoryList: Categories[];
}

function BodyContents({ categoryList }: CategoryList) {
  return (
    <>
      {console.log(categoryList)}
      <Category></Category>
    </>
  );
}

export default BodyContents;

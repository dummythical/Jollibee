import Category from "./category";

export interface CategoryItem {
  default_name: string;
  file_name: string;
  image_url?: string;
}

interface CategoryListProps {
  categoryList: CategoryItem[];
}

function BodyContents({ categoryList }: CategoryListProps) {
  return <Category categoryList={categoryList} />;
}

export default BodyContents;

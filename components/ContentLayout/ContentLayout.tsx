export const ContentLayout = ({ children }) => {
  return (
    <div className="grid md:grid-cols-[auto_minMax(375px,750px)_auto] grid-cols-[0px_auto_0px]">
      <div></div>
      <div className="p-8">
        <article className="prose lg:prose-xl">{children}</article>
      </div>
      <div></div>
    </div>
  );
};

export default ContentLayout;

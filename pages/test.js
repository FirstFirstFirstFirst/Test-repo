function HomePage() {
      
    interface TitlesType {
      id: Number,
      title: String,
    }
    const titles: Array<TitlesType> = [
      { id: 1, title: 'titleA'},
      { id: 2, title: 'titleB'}
    ];
    const titleData = titles.map((title,index) => (
      <div key ={index}>
        {title}
      </div>
    ))
    return (
      <div>
        {titleData}
      </div>
    );
  }
  export default HomePage;
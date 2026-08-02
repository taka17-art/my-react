import { posts } from './data/posts';

function App() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#333' }}>
      <header
        style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'Space-between',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        <div style={{ fontSize: '14px' }}>Blog</div>
        <div style={{ fontSize: '16px', cursor: 'pointer' }}>お問い合わせ</div>
      </header>

      <main style={{ maxWidth: '800px', margin: '0', padding: '5px 5px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '36px' }}>記事一覧</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                borderBottom: '1px solid #e5e7eb',
                //paddingBottom: '24px', // 下線との間に余白を追加
                display: 'flex',
                gap: '24px',
              }}
            >
              <div style={{ width: '200px', flexShrink: 0 }}>
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '90%',
                    //borderRadius: '4px',
                    display: 'block',
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '4px',
                    fontSize: '14px',
                    color: '#6b7280',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {post.categories.map((category, index) => (
                      <span
                        key={index}
                        style={{
                          border: '1px solid #d1d5db',
                          borderRadius: '12px',
                          padding: '2px 8px',
                          color: '#4b5563',
                          backgroundColor:'#e5e7eb',
                        }}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <h2
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginTop:'1px',
                    marginBottom: '-30px',
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: '16px',
                    color: '#4b5563',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-line', // 改行コードを反映
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.content.replaceAll('<br/>','\n')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
export default function Home() {
  const sendFetchRequest = async () => {
    try {
      // debugger;
      const response = await fetch('http://localhost:8000/users/login', {
        method: 'post',
        body: JSON.stringify({ hello: 'world' }),
        credentials: 'include',
      });
      console.log('response is:', response);
    } catch (error) {
      console.log('there was an error:', error);
      console.error(error);
    }
  };

  return (
    <div>
      <button
        type='button'
        onClick={sendFetchRequest}
        className='mt-4 rounded-lg border border-black bg-red-500 p-2 text-neutral-100 hover:rounded-xl hover:bg-red-400 active:rounded-2xl active:bg-red-600'
      >
        Send Request
      </button>
    </div>
  );
}

import { Statistics } from './components/Statistics';
import { FriendList } from './components/FriendList';
import friends from './friends.json';

function App() {
  return <>
      <Statistics />
      <FriendList friends={friends} />,
  </>
;
}

export default App;

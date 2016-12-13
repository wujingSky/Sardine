import './index.html';
import './index.css';
import { browserHistory } from 'dva/router';
import dva from 'dva';

const app = dva({
  history: browserHistory,
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/demo'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

import $ from 'jquery';
import 'bootstrap-sass';
import students from './data/students';
import studentTable from './components/studentTable';

class App {
  constructor() {
    studentTable(students);
  }

  static factory() {
    const app = new App();
    return app;
  }
}

export default App;

$(() => {
  App.factory();
});

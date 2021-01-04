<template>
  <div class="view-main">
    <ViewHeader />
    <h1 class="view-main__title">Lorem</h1>
    <input type="text" v-model="dataName">
    <button @click.prevent="getName">send</button>
    <button>reset all</button>
    <br>
    <p></p>
    <button>Ctrl+Z</button>
    <div style="display:flex;width: 100%;">
      <div style="width: 50%;flex-shrink:0;">
        <h2 style="margin-top:50px;">Current state</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="activeState"
            >
              <td>{{ activeState.id }}</td>
              <td>{{ activeState.name }} </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="width: 50%;flex-shrink:0;">
        <h2 style="margin-top:50px;">History state</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="id in dataList.currentState"
              :key="id"
            >
              <td  style="cursor: pointer" @click.prevent="moveToState(id)">{{ id }} |</td>
              <td>
                <span>
                  {{ dataList.nameList.find(nameList => nameList.id == id).name }}; 
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ViewHeader from './Components/ViewHeader';

export default {
  name: 'App',
  components: {
    ViewHeader
  },
  data() {
    return {
      dataList: {
        currentState: Array(),
        nameList: Array()
      },
      activeState: null,
      dataName: null,
      dataId: 1,
      currentId: 0,
    }
  },
  methods: {    
    getName() {
      if (!this.dataName) return false;

      const currentPosition = this.dataList.currentState.indexOf(this.currentId);
      const cloneArray = this.dataList.currentState.slice(0, currentPosition + 1);

      const data = {id: this.dataId, name: this.dataName};                
      this.dataList.nameList.push(data);
      cloneArray.push(this.dataId++);
      this.dataList.currentState = cloneArray;
      this.currentId = data.id;

      this.getLastItem();
      this.dataName = null;
    },

    getLastItem() {
      const arrayLength = this.dataList.currentState.length;
      const lastItem = this.dataList.currentState[arrayLength - 1];            
      this.activeState = this.dataList.nameList.find(item => item.id == lastItem);    
    },

    moveToState(id) {
      this.activeState = this.dataList.nameList.find(item => item.id == id);
      this.currentId = id;
    }
  },
  created() {
    this.getLastItem();
  }
    
}
</script>

<style lang="scss">
  .view-main {
    margin: 25px;

    &__title {
      font-size: 32px;
      text-align: center;
    }
  }
</style>

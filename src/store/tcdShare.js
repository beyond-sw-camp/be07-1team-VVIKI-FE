function initState() {
    return {
        isDragStatus: false, // 현재 drag 이벤트가 실행되고 있는지 확인용
        dragStartPage: null, // drag이벤트가 시작된 페이지가 어디인지 입력 용 >> "thread" , "canvas" , "drive" 가 입력될 예정
        result: null, // drag 한 파일이나 element(thread 혹은 canvas)의 정보 object 혹은 json 파일 
    };
}


const tcdShare = {
    state: initState(),
    mutations: {
        setTcdStateAllData(state, data) {
            Object.keys(data).forEach(key => {
                state[key] = data[key];
            });
        },
        setIsTcdDragStatus(state, data){
            state.isDragStatus = data;
        }
    },
    actions: {
        setTcdStateAllDataActions({ commit }, data) {
            commit('setTcdStateAllData', data);
            console.error("tcd test.. ", data)
        },
        setIsTcdDragStatusActions({ commit }, data) {
            commit('setIsTcdDragStatus', data);
        },
    },
    getters: {
        getAllTcdState: state => state,
        getsetIsTcdDragStatus: state => state.isDragStatus,
        // getBlockFeIdIndex: (state) => (targetId) => {
        //     return state.defaultBlockFeIds.indexOf(targetId);
        // },
    }
}

export default tcdShare;
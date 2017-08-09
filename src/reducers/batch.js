import { CREATE_BATCH } from '../actions/batch/create'

const batch = [
  {
    name: "Moj",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVDbo9m_KLTSbWL6J0YFR8CwtigZBTJfeDXZAbXVfOdey5oG2uQ",
    evaluation: "green"
  }, {
    name: "Mehdi",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb3MgUg0E8cxBWzsAm05HE430TorBaTQerQ67-sKi83ZFot-3",
    evaluation: "yellow"
  }, {
    name: "Marlou",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vsY9DrnJB7zRQTRA_bkUH1FPrDFXrJfB2e-9LeUc9shcyZQZ",
    evaluation: "red"
  }, {
    name: "Mehrnoush",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNF1xdRjsNaeCZg9SJ2sLFa7bpRpzgNX-8V1vNbex-y-g43fzWGw",
    evaluation: "yellow"
  }, {
    name: "Ellie",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6wZiAc_1OqWzt8GKSXoL5zYuhOxel4Vpqowu5hEOAIs1tN32Lg",
    evaluation: "green"
  }, {
    name: "Roshi",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VLURuMEhDmR2Cr6czrCbM-VD3MhozPhMUZxbcBDTDx1c7-jB",
    evaluation: "red"
  }, {
    name: "Amir",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT67PXwl_Eb3Vyrq7-QJzAov-EH0t1fzWUuNL5Yk1jbFQBuPhAmg",
    evaluation: "red"
  }, {
    name: "Rumi",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqxItG_0HNDaDfhf12ch9kGSVmoNZDx3ZpWUCspHCUgmEAtUHCA",
    evaluation: "green"
  }, {
    name: "Rayan",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgpu0EYDrhIJ-VSxo1ExMN-kpkO4LSm3WCqx_ZjFitn8S5RaU6g",
    evaluation: "yellow"
  }, {
    name: "Essy",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvX2CY5AS_YkePVBzFz9H9tq3y7ivrOjvka3qvOgkZ6YJo6M0fEw",
    evaluation: "yellow"
  }
]

const initialState = batch

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case CREATE_BATCH :
      return [Object.assign({}, payload)].concat(state)
      default :
        return state
  }
}

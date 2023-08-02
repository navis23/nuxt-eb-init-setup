export const useMenuStore = defineStore('menuStore', {
    state: () => ({
        menu: [
                { name : 'Dashboard', icon : 'lucide:dashboard', link : 'dashboard', pathName : 'dashboard', keterangan : 'Menu Overview Informasi Terupdate' },
                { name : 'Produk', icon : 'lucide:product', link : 'produk', pathName : 'produk', keterangan : 'Menu List dan Detail Semua Produk' },
                { name : 'Kategori', icon : 'lucide:category', link : 'kategori', pathName : 'kategori', keterangan : 'Menu List dan Detail Semua Kategori Produk' },
                { name : 'Supplier', icon : 'lucide:delivery-add', link : 'supplier', pathName : 'supplier', keterangan : 'Menu List dan Detail Semua Supplier' },
                // { name : 'Transaksi', icon : 'lucide:calculation', link : 'transaksi', pathName : 'transaksi', keterangan : 'Menu Transaksi Produk' },
                { name : 'Histori', icon : 'lucide:catalog', link : 'histori', pathName : 'histori', keterangan : 'Menu Histori Transaksi' },
        ],

        menuSetting: [
                {name : 'Setting', icon : 'lucide:settings', link : 'setting', pathName : 'setting'},
                {name : 'Logout', icon : 'lucide:logout', link : '', pathName : ''},
        ]

    }),
    getters: {

    },
    actions: {
        
    }
})

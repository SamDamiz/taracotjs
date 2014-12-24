var load_modules = {
	blocks: [{
		name: 'menu'
	}, {
		name: 'auth'
	}, {
		name: 'parts'
	}, {
		name: 'feedback'
	}, {
		name: 'lang'
	}],
	modules: [{
		name: 'auth',
		prefix: '/auth/',
		cp_prefix: ''
	}, {
		name: 'cp',
		prefix: '/cp/',
		cp_prefix: ''
	}, {
		name: 'siteconf',
		prefix: '',
		cp_id: 'siteconf',
		cp_prefix: '/cp/siteconf/'
	}, {
		name: 'templates',
		prefix: '',
		cp_id: 'templates',
		cp_prefix: '/cp/templates/'
	}, {
		name: 'user',
		prefix: '',
		cp_id: 'users',
		cp_prefix: '/cp/users/'
	}, {
		name: 'invites',
		prefix: '',
		cp_id: 'invites',
		cp_prefix: '/cp/invites/'
	}, {
		name: 'files',
		prefix: '/files/',
		cp_id: 'files',
		cp_prefix: '/cp/files/'
	}, {
		name: 'browse',
		prefix: '',
		cp_id: 'files',
		cp_prefix: '/cp/browse/',
		hidden: true
	}, {
		name: 'menu',
		prefix: '',
		cp_id: 'menu',
		cp_prefix: '/cp/menu/'
	}, {
		name: 'textedit',
		prefix: '',
		cp_id: 'textedit',
		cp_prefix: '/cp/textedit/',
		hidden: true
	}, {
		name: 'parts',
		prefix: '',
		cp_id: 'parts',
		cp_prefix: '/cp/parts/',
		hidden: true
	}, {
		name: 'search',
		prefix: '/search/',
		cp_prefix: ''
	}, {
		name: 'blog',
		prefix: '',
		cp_prefix: '/cp/blog/'
	}, {
		name: 'social',
		prefix: '/social/',
		cp_prefix: ''
	}, {
		name: 'settings',
		prefix: '',
		cp_id: 'settings',
		cp_prefix: '/cp/settings/'
	}, {
		name: 'maintenance',
		prefix: '/maintenance/',
		cp_id: '',
		cp_prefix: ''
	}, {
		name: 'feedback',
		prefix: '/feedback/',
		cp_id: '',
		cp_prefix: ''
	}, {
		name: 'warehouse',
		prefix: '',
		cp_id: 'warehouse',
		cp_prefix: '/cp/warehouse/'
	}, {
		name: 'warehouseconf',
		prefix: '',
		cp_id: 'warehouseconf',
		cp_prefix: '/cp/warehouseconf/'
	}, {
		name: 'catalog_orders',
		prefix: '',
		cp_id: 'catalog_orders',
		cp_prefix: '/cp/catalog_orders/'
	}, {
		name: 'catalog',
		prefix: '/catalog/',
		cp_prefix: ''
	}, {
		name: 'pages',
		prefix: '',
		cp_id: 'pages',
		cp_prefix: '/cp/pages'
	}]
};

module.exports = load_modules;
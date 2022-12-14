// import { fhir } from 'fhir';
// import * as fhir from 'fhir.js';

export default function createFhir() {
	const virtualModuleId = 'virtual:fhir-module';
	const resolvedVirtualModuleId = '\0' + virtualModuleId;

	// return {
	// 	name: 'my-example', // this name will show up in warnings and errors
	// 	resolveId(source) {
	// 		if (source === 'virtual-module') {
	// 			return source; // this signals that rollup should not ask other plugins or check the file system to find this id
	// 		}
	// 		return null; // other ids should be handled as usually
	// 	},
	// 	load(id) {
	// 		if (id === 'virtual-module') {
	// 			return 'export default "This is virtual!"'; // the source code for "virtual-module"
	// 		}
	// 		return null; // other ids should be handled as usually
	// 	},
	// };

	return {
		name: 'create-fhir',
		resolveId(id) {
			if (id === virtualModuleId) {
				return resolvedVirtualModuleId;
			}
		},
		load(id) {
			if (id === resolvedVirtualModuleId) {
				// return fhir();
				// return `export const msg = ${fhir}`;
				// return `${fhir}`;
				return `const msg = 'test'`;
			}
		},
	};
}

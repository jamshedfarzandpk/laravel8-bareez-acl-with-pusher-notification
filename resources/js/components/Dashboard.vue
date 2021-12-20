<template>

			<div class="card">
				<h5>All Users</h5>
				 <DataTable :value="users" stripedRows  responsiveLayout="scroll" class="p-datatable-lg" :paginator="true" :rows="10"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink
			        LastPageLink RowsPerPageDropdown"
                    :rowsPerPageOptions="[10,20,50]"
			        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
					<Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" :sortable="true"></Column>
                </DataTable>
			</div>

</template>

<script>
	import { ref, onMounted } from 'vue';
	import UserService from "../service/UserService";

export default {
    setup() {
        onMounted(() => {
            userService.value.getUsers().then(data => users.value = data);
        })

        const users = ref();
        const userService = ref(new UserService());
         const columns = ref([
            {field: 'name', header: 'Name'},
            {field: 'email', header: 'User Email'},
            {field: 'email_verified_at', header: 'Email Verified at'},
            {field: 'created_at', header: 'User Register Date'}
        ]);
        return { users,columns }
    }

}
</script>

<style scoped lang="scss">
	.customer-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;
		&.status-qualified {
			background: #C8E6C9;
			color: #256029;
		}
		&.status-unqualified {
			background: #FFCDD2;
			color: #C63737;
		}
		&.status-negotiation {
			background: #FEEDAF;
			color: #8A5340;
		}
		&.status-new {
			background: #B3E5FC;
			color: #23547B;
		}
		&.status-renewal {
			background: #ECCFFF;
			color: #694382;
		}
		&.status-proposal {
			background: #FFD8B2;
			color: #805B36;
		}
	}
	.product-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;
		&.status-instock {
			background: #C8E6C9;
			color: #256029;
		}
		&.status-outofstock {
			background: #FFCDD2;
			color: #C63737;
		}
		&.status-lowstock {
			background: #FEEDAF;
			color: #8A5340;
		}
	}
	.order-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;
		&.order-delivered {
			background: #C8E6C9;
			color: #256029;
		}
		&.order-cancelled {
			background: #FFCDD2;
			color: #C63737;
		}
		&.order-pending {
			background: #FEEDAF;
			color: #8A5340;
		}
		&.order-returned {
			background: #ECCFFF;
			color: #694382;
		}
	}
</style>

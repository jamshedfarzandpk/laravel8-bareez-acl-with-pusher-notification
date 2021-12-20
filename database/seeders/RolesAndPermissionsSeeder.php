<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Reset cached roles and permissions
       app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

       // create permissions
       Permission::create(['name' => 'user-list']);
       Permission::create(['name' => 'user-create']);
       Permission::create(['name' => 'user-edit']);
       Permission::create(['name' => 'user-delete']);
       Permission::create(['name' => 'user-show']);
       Permission::create(['name' => 'role-list']);
       Permission::create(['name' => 'role-create']);
       Permission::create(['name' => 'role-edit']);
       Permission::create(['name' => 'role-delete']);
       Permission::create(['name' => 'role-show']);
       Permission::create(['name' => 'permission-list']);
       Permission::create(['name' => 'permission-create']);
       Permission::create(['name' => 'permission-edit']);
       Permission::create(['name' => 'permission-delete']);
       Permission::create(['name' => 'permission-show']);
       // create roles and assign created permissions

       // this can be done as separate statements
       $role = Role::create(['name' => 'super-admin']);
       $role->givePermissionTo(Permission::all());
       $role = Role::create(['name' => 'admin','guard_name' => 'admin']);

       // or may be done by chaining
       $role = Role::create(['name' => 'manager','guard_name' => 'manager']);
       $role = Role::create(['name' => 'visitor']);

    }
}

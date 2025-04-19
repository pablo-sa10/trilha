<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Criar Roles
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $userRole = Role::firstOrCreate(['name' => 'user']);

        // Criar Permissões
        $viewDashboard = Permission::firstOrCreate(['name' => 'view dashboard']);
        $editUsers  = Permission::firstOrCreate(['name' => 'edit users']);

        // atribuir permissões às roles
        $adminRole->givePermissionTo([$viewDashboard, $editUsers]);
        $userRole->givePermissionTo([$viewDashboard]);

        // Criar usuários
        $admin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
            ]
        );

        $user = User::firstOrCreate(
            ['email' => 'user@example.com'],
            [
                'name' => 'Common User',
                'password' => Hash::make('password'),
            ]
        );

        // Atribuir roles aos usuários
        $admin->assignRole($adminRole);
        $user->assignRole($userRole);
    }
}

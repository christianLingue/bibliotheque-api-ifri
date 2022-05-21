import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';

// export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
export function Roles(...roles: string[]) {
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(RolesGuard),
    );
  }
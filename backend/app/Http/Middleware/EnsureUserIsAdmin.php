<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user() || $request->user()->user_type !== User::TYPE_ADMIN) {
            abort(403, 'Apenas o administrador pode realizar esta ação.');
        }

        return $next($request);
    }
}

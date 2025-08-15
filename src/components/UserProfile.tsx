import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/slices/userSlice';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import { googleAuth } from '@/lib/google-auth';
import { toast } from 'sonner';

const UserProfile = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      googleAuth.signOut();
      dispatch(logout());
      toast.success('Successfully logged out');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    }
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  // Extract first name from full name
  const firstName = user.firstName || user.name.split(' ')[0];

  return (
    <div className="absolute top-8 right-8 z-20 flex items-center gap-4">
      <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
        {user.picture ? (
          <img 
            src={user.picture} 
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <User className="w-8 h-8 text-white" />
        )}
        <div className="text-white">
          <p className="text-sm font-medium">Welcome, {firstName}!</p>
          <p className="text-xs text-gray-300">{user.email}</p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLogout}
        className="text-white hover:bg-white/10"
      >
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default UserProfile;

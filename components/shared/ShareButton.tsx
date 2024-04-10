import toast from 'react-hot-toast';
import { PiShareFat } from 'react-icons/pi';

interface ShareButtonProps {
  className?: string;
  hoverClassName?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  className,
  hoverClassName,
}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Pascal Is Coding Portfolio',
          text: 'Check out my Portfolio Site!',
          url: window.location.href,
        });
        toast.success('Content shared successfully');
      } catch (error: any) {
        toast.error(
          `Error sharing content: ${error.message || 'Unknown error'}`
        );
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('URL copied to clipboard!');
      } catch (error: any) {
        toast.error(`Failed to copy URL: ${error.message || 'Unknown error'}`);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`text-2xl transition-all duration-200 ease-in-out ${className} ${hoverClassName}`}
    >
      <PiShareFat />
    </button>
  );
};

export default ShareButton;
